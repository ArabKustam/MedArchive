// Страница «Загрузка документов» (FSD: pages/admin-upload).
// Тонкая обёртка над фичей загрузки.

import { UploadDropzone } from "@/features/document-upload/ui/UploadDropzone";

export function AdminUploadPage() {
  return <UploadDropzone />;
}
