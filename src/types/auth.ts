export interface AuthActionProps {
    request: Request;
}

export interface ActionData {
    status: 'success' | 'error';
    message?: string;
    user?: { email: string; password?: string };
}

export interface ILoginError {
    error: string,
    message?: string,
}