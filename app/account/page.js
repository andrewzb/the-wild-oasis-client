import { auth } from "@/app/_lib/auth"

export const metadata = {
  title: 'Account'
}

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h2 className=" font-semibold text-2xl text-accent-400">Welcome, {session.user.name}</h2>
    </div>

  )
}
