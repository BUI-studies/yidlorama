import { logIn, getCurrentUser } from "@/firebase";
import { ActionData, ILoginError, AuthActionProps } from './../types/auth';

export const action = async ({ request }: AuthActionProps): Promise<ActionData> => {
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


// e-mail: test-admin@gogi.com

// pass: !Goga-but-Gogi!