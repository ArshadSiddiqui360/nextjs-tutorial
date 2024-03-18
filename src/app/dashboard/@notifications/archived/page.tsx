import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
        <div>Notifications</div>
        <Link href="/dashboard">Default Notifications</Link>
    </Card>
  )
}
