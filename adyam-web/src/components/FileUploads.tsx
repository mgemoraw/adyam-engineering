
import {useState, useRef, type ChangeEvent} from 'react';
import { Plus, Trash, Upload } from 'react-feather';
import api from '../api/api';


type FileWithProgress = {
    id: string;
    file: File;
    progress: number;
    uploaded: boolean
}
export function FileUpload() {
    const [files, setFiles] = useState<FileWithProgress[]>([]);
    const [uploading, setUploading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleFileSelect(e:ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.length) return;

        const newFiles = Array.from(e.target.files).map((file)=>({
            id:file.name,
            file: file,
            progress: 0,
            uploaded: false,
        }));

        setFiles([...files, ...newFiles]);

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    const removeFile = (id:string) => {
        setFiles((prevFiles)=>prevFiles.filter(file => file.id !== id));
    }

    const handleClear = () => {
        setFiles([]);
    } 

    const handleUpload = async () => {
        if (files.length === 0) return ;

        setUploading(true);

        const uploadPromisses = files.map(async (fileWithProgress:FileWithProgress) => {
            const formData = new FormData();
            formData.append("file", fileWithProgress.file);

             try {
                await api.post('http://httpbin.org/post', formData, {
                   onUploadProgress: (progressEvent) => {
                    const progress = Math.round(
                        (progressEvent.loaded * 100) / (progressEvent.total || 1)
                    );

                    setFiles((prevFiles) => 
                        prevFiles.map((file)=>
                            file.id === fileWithProgress.id ? {...file, progress}: file));
                   }
                });

                setFiles((prevFiles) => 
                    prevFiles.map((file) =>
                        file.id === fileWithProgress.id ? {...file, uploaded: true}: file,),);
            }catch(error) {
                //
                console.error(error);
            }
        });


        await Promise.all(uploadPromisses);
        setUploading(false);
    } 

    return (
        <div className="flex flex-col gap-4 ">
            <h2 className="text-xl"> File Upload</h2>
            <div className="flex  gap-2">
                <FileInput
                    inputRef={inputRef}
                    disabled={false}
                    onFileSelect={handleFileSelect}
                />
                <ActionButtons 
                    disabled={files.length === 0 || uploading} 
                    onClear={handleClear}
                    onUpload={handleUpload}
                />
            </div>
            < FileList 
                files={files} 
                onRemove={removeFile}
                uploading={uploading}
            />
        </div>
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
    onRemove: (id: string) => void;
    uploading: boolean;
}


function FileItem({file, onRemove, uploading}: FileItemProps) {
    const Icon = getFileIcon(file.file.type);
    return (
        <div className="space-y-2 rounded-md bg-grayscale-700 p-4">
        <div className="flex items-start justify-between ">
            <div className="flex items-center gap-3">
                {/* <Icon size={40} className="text-primary-500"/> */}
                <span>{Icon}</span>
                <div className="flex flex-col">
                    <span className="font-medium">{file.file.name}</span>
                    <div className="flex items-center gap-2 text-xs text-grayscale-400">
                        <span>{formatFileSize(file.file.size)}</span>
                        <span>.</span>
                        <span>{file.file.name || "Unknown type"}</span>
                    </div>
                </div>
            </div>
            {!uploading && (
                <button 
                    onClick={()=> onRemove(file.id)}
                    className="bg-none p-0"
                >
                    Remove
                </button>
            )}
        </div>
        <div className="text-right text-xs">
            {file.uploaded ? "Completed" : `${Math.round(file.progress)}%`}
        </div>
        <ProgressBar progress={file.progress}/>
        </div>
    );
}

type ProgressBarProps = {
    progress: number;
}

function ProgressBar({progress}: ProgressBarProps) {
    return (
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full bg-green-500 transition-all duration-300"
                style={{width: `${progress}%`}}
            >

            </div>
        </div>
    );
}


// input component
type FileInputProps = {
    inputRef: React.RefObject<HTMLInputElement | null>;
    disabled: boolean;
    onFileSelect: (e:ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({inputRef, disabled, onFileSelect}: FileInputProps) {

    return <>
        <input
            type="file"
            ref={inputRef}
            onChange={onFileSelect}
            multiple 
            className="hidden"
            id="file-upload"
            disabled={disabled}
        />

        <label 
            htmlFor='file-upload'
            className="flex cursor-pointer items-center gap-2 rounded-md bg-grayscale-700 px-6 py-2 hover:opacity-50"
        >
            <Plus size={18} />
            Select Files 
        </label>

    </>
}


type ActionButtonsProps = {
    disabled: boolean;
    onUpload: () => void;
    onClear: () => void;
}

function ActionButtons({disabled, onUpload, onClear}: ActionButtonsProps) {

    return (
        <div className="flex items-center justify-around gap-2">
            <button 
                className="flex items-center gap-2"
                onClick={onUpload}
                disabled={disabled}
            >
                <Upload size={18}/>
                Upload
            </button>

            <button 
                className="flex items-center gap-2"
                onClick={onClear}
                disabled={disabled}
            >
                <Trash size={18}/>
                Clear All
            </button>
        </div>
    );
}


const getFileIcon = (mimieType:string) => {
    if (mimieType.startsWith("image/")) {
        return "🖼️";
    }
    
    if (mimieType.startsWith("video/")) {
        return "🎬";
    }
    if (mimieType.startsWith("audio/")) {
        return "🎵";
    }

    if (mimieType.startsWith("application/pdf")) {
        return "📄";
    }
    if (mimieType.startsWith("file/")) {
        return "📁";
    }
}


const formatFileSize = (size: number) => {
    // const k = 1024;
    // const sizes = ['B','KB', 'MB', 'GB'];
    // const i = Math.floor(Math.log(size) / Math.log(k));
    // return `${parseFloat((size / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;

    if (size < 1024) return `${size} B`;
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}