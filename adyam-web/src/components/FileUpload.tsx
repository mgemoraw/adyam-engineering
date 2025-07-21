import {useState, useRef, type ChangeEvent} from 'react';
import {  Plus, Trash, Upload } from 'react-feather';
import api from '../api/api';


type FileWithProgress = {
    id: string;
    file: File;
    progress:number;
    uploaded: boolean;
}


export function FileUpload() {
    const [files, setFiles] = useState<FileWithProgress []>([]);
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.length) return;

        const newFiles = Array.from(e.target.files).map((file) =>({
            id: file.name,
            file,
            progress: 0,
            uploaded: false,
        }));
            
        setFiles([...files, ...newFiles]);

        if (inputRef.current) {
            inputRef.current.value = '';
        }

    };

    const removeFile = (id: string) => {
        // (id) => setFiles(files.filter(file => file.id !== id))
        setFiles((prevFiles) => prevFiles.filter(file => file.id !== id));
    }
    
    // clear function
    function handleClear(){
        setFiles([]);
    }

    // upload function
    async function handleUpload() {
        if (files.length === 0 || uploading) return;
        
        // set uploading true
        setUploading(true);


        const uploadPromisses = files.map(async (fileWithProgress) => {
            const formData = new FormData();
            formData.append('file', fileWithProgress.file);

            try {
                const response = await api.post("http://localhost:8000/upload", formData, {
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round(
                            (progressEvent.loaded * 100) / (progressEvent.total || 1)
                        );
                        setFiles((prevFiles) => 
                        prevFiles.map((file)=> 
                        file.id === fileWithProgress.id ? {...file, progress}: file))
                    }
                });

                setFiles((prevFiles) =>
                prevFiles.map((file) => 
                file.id === fileWithProgress.id ? {...file, uploaded: true}: file,),);

            }catch(error){
                console.error(error);
            } 
            
        });

        await Promise.all(uploadPromisses);
        setUploading(false);
    }


    return (
        <div className="flex  flex-col gap-4"> 
            <h2 className='text-xl font-bold'>File Upload</h2>
            <div className='flex '>
                <FileInput
                inputRef={inputRef}
                disabled={uploading}
                onFileSelect={handleFileSelect}
                />

                <ActionButtons
                    onClear={handleClear}
                    onUpload={handleUpload}
                    disabled={files.length === 0 || uploading}
                />
            </div>
            
            <FileList
                files={files}
                onRemove={removeFile}
                uploading={uploading} // This can be controlled based on your upload logic      
            />
            
        </div>
    );
}

type ActionButtonsProps = {
    disabled: boolean;
    onUpload: () => void;
    onClear: () => void;
}

function ActionButtons({onUpload, onClear, disabled}: ActionButtonsProps) {
    return (
        <>
            <button 
                onClick={onUpload}
                disabled={disabled}
                className="flex items-center gap-2"
            >
                <Upload size={18}/>
                Upload 
            </button>

            <button 
                onClick={onClear}
                disabled={disabled}
                className="flex items-center gap-2"
            >
                <Trash size={18}/>
                Clear All 
            </button>
        </>
    );
}

type FileListProps = {
    files: FileWithProgress[];
    onRemove: (id:string) => void;
    uploading: boolean;
}

function FileList({files, onRemove, uploading}: FileListProps) {
    return (  
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">Selected Files</h3>
            <div className="space-y-2">
                {files.map((file)=>(
                    <FileItem
                        key={file.id}
                        file={file}
                        onRemove={onRemove}
                        uploading={uploading}
                    />
                ))}
            </div>
        </div>  
    );
}

type FileItemProps = {
    file: FileWithProgress;
    onRemove: (id:string) => void;
    uploading: boolean;
}

function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="relative h-3 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500"
                style={{ width: `${progress}%` }}
            />
            
        </div>
    );
}


function FileItem({file, onRemove, uploading}: FileItemProps) {
    // const Icon = getFileIcon(file.file.type);
    return (
        
        <div className="p-2 border border-gray-500 bg-gray-100 rounded-md">
            <div className="flex items-center justify-between p-2">

                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{getFileIcon(file.file.type)} {file.file.name}</span>
                    <span className="text-xs text-gray-500">{formatFileSize(file.file.size)}</span>
                    <span>{file.file.type || 'Unknown type'}</span>
                </div>
                
            
            
                <div className="flex items-center gap-2">
                    {uploading ? (
                        <ProgressBar progress={file.progress} />
                    ) : (
                        <button 
                            onClick={() => onRemove(file.id)} 
                            className="text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>
            
            <div>
                {file.uploaded ? "Completed" : `${Math.round(file.progress)}% `}
            </div>~
            <ProgressBar progress={file.progress} />
            
        </div>
       
    );
}

// inputs in the serparate component
type FilInputProps = {
    inputRef: React.RefObject<HTMLInputElement | null>;
    disabled: boolean;
    onFileSelect: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({inputRef, disabled, onFileSelect}: FilInputProps) {

    
    return (
        <div className="flex  flex-col gap-4">
            <input 
                type="file" 
                ref={inputRef} 
                disabled={disabled} 
                onChange={onFileSelect} 
                multiple
                className="hidden"
                id='file-upload'
            />
            <label htmlFor="file-upload" className="flex  cursor-pointer items-center gap-2 rounded-md border border-dashed border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {/* {disabled ? "File selection disabled" :  "Select Files" }*/}
                <Plus size={18}/>
                 Select Files
                
            </label>
            {/* <button 
                onClick={() => inputRef.current?.click()} 
                disabled={disabled}
            >
                Select Files
            </button> */}


        </div>
    );
}


const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) {
        return '🖼️'; // Image icon
    } else if (mimeType.startsWith('video/')) {
        return <span role="img" aria-label="video">🎬</span>; // Alternative video icon
        return '🎥'; // Video icon

    } else if (mimeType.startsWith('audio/')) {
        return '🎵'; // Audio icon
    } else if (mimeType === 'application/pdf') {
        return '📄'; // PDF icon
    } else {
        return '📁'; // Generic file icon
    }
}

const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}