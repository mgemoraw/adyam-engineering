export type ContactMessage = {
    name: string;
    email: string;
    phone: string;
    body: string;
}

export type Message = {
    sender: string; // sender id
    receiver: string; // receiver id
    body: string; //message body
}
