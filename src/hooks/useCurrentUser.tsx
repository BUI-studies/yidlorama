import { useNavigate, useActionData } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/firebase";
import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from "@/routing";
import { IUserData } from "@/actions/actionsAuth";

const useCurrentUser = () => {
    const navigate = useNavigate();
    const actionData = useActionData() as IUserData;
    const { role } = useAuth();

    useEffect(() => {
        if (actionData?.status === 'success' && role) {
            switch (role) {
                case 'garson':
                    navigate(COMMON_ROUTES_NAMES.ORDERS);
                    break;
                case 'admin':
                    navigate(ADMIN_ROUTES_NAMES.USERS);
                    break;
                default:
                    console.error('Unknown role');
            }
        }
    }, [actionData, navigate, role]);

    return actionData;
}

export default useCurrentUser