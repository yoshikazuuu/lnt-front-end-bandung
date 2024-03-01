'use server'

import { redirect } from 'next/navigation'

export async function navigate(user) {
    redirect(`/${user.get('id')}`)
}