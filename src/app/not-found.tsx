import { Button } from "@/components/shared/button/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4">
      <Link href="/dashboard">
        <Button
          label="Volver a la página de inicio"
          size="large"
          color="primary"
        />
      </Link>
    </div>
  );
}
