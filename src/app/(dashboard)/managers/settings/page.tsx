"use client"
import SettingsForm from '@/components/SettingsForm'
import { useGetAuthUserQuery, useUpdateManagerSettingsMutation} from '@/state/api';
import React from 'react'

const ManagerSettings = () => {
    const { data: authUser, isLoading } = useGetAuthUserQuery();
      const [updateTenant] = useUpdateManagerSettingsMutation();
      
      
      if (isLoading) return <>Loading...</>;
    
      const initialData = {
        name: authUser?.userInfo?.data?.managerName,
        email: authUser?.userInfo?.data?.managerEmail,
        phoneNumber: authUser?.userInfo?.data?.managerPhone,
      };
    
      const handleSubmit = async (data: typeof initialData) => {
        await updateTenant({
          cognitoId: authUser?.cognitoInfo?.userId,
          ...data,
        });
      };
  return (
    <SettingsForm initialData={initialData}
    onSubmit={handleSubmit}
    userType="manager"/>
  )
}

export default ManagerSettings
