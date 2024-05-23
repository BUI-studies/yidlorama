import { logIn, getCurrentUser } from "@/firebase";

export interface AuthActionProps {
    request: Request;
}

export interface IUserData {
    status: 'success' | 'error';
    message?: string;
    user?: { email: string; password?: string };
}

export interface ILoginError {
    error: string,
    message?: string,
}

export const action = async ({ request }: AuthActionProps): Promise<IUserData> => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        await logIn({ email, password });
        const currentUser = getCurrentUser();

        if (currentUser) {
            return { status: 'success', user: { email } };
        } else {
            return { status: 'error', message: 'User not found' };
        }
    } catch (error) {
        const loginError = error as ILoginError
        console.error(error);
        return { status: 'error', message: loginError.message };
    }
}

