import { userServiceEdit } from "@/services/user-service";
import React from "react";

export default function EditUser() {
  return <div>[id].tsx</div>;
}

interface GetServerSideProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps({ params }: GetServerSideProps) {
  const { id } = params;

  const response = await userServiceEdit(id);

  return {
    props: {
      userDetail: response.data,
      id: id,
    },
  };
}
