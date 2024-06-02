import { logIn } from "@/firebase";

export enum AuthStatus {
    Success = 'success',
    Error = 'error'
}


export interface AuthActionProps {
    request: Request;
}

export type AuthActionData = {
    status: null | AuthStatus;
    message?: string;
    user?: { email: string; password?: string };
}

export interface ILoginError {
    error: string,
    message?: string,
}

export const action = async ({ request }: AuthActionProps) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        await logIn({ email, password });
        return { status: AuthStatus.Success }
    } catch (error) {
        console.error(error);
        return { status: AuthStatus.Error, message: 'Error acount' };
    }

}

