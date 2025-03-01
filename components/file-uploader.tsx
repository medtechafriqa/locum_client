"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, FileText } from "lucide-react"

interface FileUploaderProps {
  accept: string
  maxSize: number
  label: string
  onChange?: (file: File | null) => void
}

export function FileUploader({ accept, maxSize, label, onChange }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (selectedFile: File | null) => {
    setError(null)

    if (!selectedFile) {
      setFile(null)
      onChange && onChange(null)
      return
    }

    // Check file size (convert maxSize from MB to bytes)
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`)
      return
    }

    // Check file type
    const fileType = selectedFile.type
    const acceptedTypes = accept.split(",").map((type) => type.trim())

    const isAccepted = acceptedTypes.some((type) => {
      if (type.startsWith(".")) {
        // Check file extension
        const extension = `.${selectedFile.name.split(".").pop()}`
        return extension.toLowerCase() === type.toLowerCase()
      } else {
        // Check MIME type
        return fileType.includes(type.replace("*", ""))
      }
    })

    if (!isAccepted) {
      setError("File type not accepted")
      return
    }

    setFile(selectedFile)
    onChange && onChange(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  const removeFile = () => {
    setFile(null)
    setError(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    onChange && onChange(null)
  }

  return (
    <div className="w-full">
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-primary bg-primary/10"
              : error
                ? "border-destructive bg-destructive/10"
                : "border-input hover:border-primary/50 hover:bg-primary/5"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-2">
            <Upload className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm font-medium">{label}</p>
          </div>
          <input
            type="file"
            ref={inputRef}
            accept={accept}
            onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 border rounded-md">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
            <span className="text-xs text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
          </div>
          <Button variant="ghost" size="icon" onClick={removeFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {error && <p className="text-sm text-destructive mt-2">{error}</p>}
    </div>
  )
}

