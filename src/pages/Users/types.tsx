import { UniversalTableProps, BaseData } from "@/components/UniversalTable/types";

export interface User extends BaseData {
	role: string,
	fullName: string,
	password: string
}

export type UsersPageProps<T> = {
  header: string,
  tableData: UniversalTableProps<T>
}