import CallAPI from "@/config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function userService() {
  const url = `${ROOT_API}/${API_VERSION}/user`;

  return CallAPI({
    url,
    method: "GET",
    isToken: true,
  });
}
export async function userServiceStore(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/user`;

  return CallAPI({
    url,
    method: "POST",
    data,
  });
}

export async function userServiceEdit(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/user/${id}/edit`;

  return CallAPI({
    url,
    method: "GET",
  });
}

export async function userServiceUpdate(data: FormData, id: string) {
  const url = `${ROOT_API}/${API_VERSION}/user/${id}`;

  return CallAPI({
    url,
    method: "PUT",
    data,
  });
}

export async function userServiceDestroy(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/user/${id}`;

  return CallAPI({
    url,
    method: "DELETE",
  });
}
