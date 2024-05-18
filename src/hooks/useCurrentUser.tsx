import { useNavigate, useActionData } from "react-router-dom";
import { useEffect } from "react";
import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from "@/routing";
import { getCurrentUser } from "@/firebase";
import { getUserRoleData } from "@/firebase/firestore";

interface ActionData {
    status: 'success' | 'error';
    message?: string;
    user?: { email: string; password: string };
}


const useCurrentUser = () => {
    const navigate = useNavigate();
    const actionData = useActionData() as ActionData;

    useEffect(() => {
        const handleRedirect = async () => {
            if (actionData?.status === 'success') {
                const currentUser = getCurrentUser();
                if (currentUser) {
                    const role = await getUserRoleData(currentUser.uid);
                    if (role === 'garson') {
                        navigate(COMMON_ROUTES_NAMES.ORDERS);
                    } else if (role === 'admin') {
                        navigate(ADMIN_ROUTES_NAMES.USERS);
                    } else {
                        console.error('Unknown role');
                    }
                }
            }
        };

        handleRedirect();
    }, [actionData, navigate]);

    return actionData
}

export default useCurrentUser