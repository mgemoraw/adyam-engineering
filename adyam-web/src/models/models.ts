export type ContactMessage = {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export type Message = {
    sender: string; // sender id
    receiver: string; // receiver id
    message: string; //message body
}
