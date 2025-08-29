"use client"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'
export default function ImageViewer({enlargeImage, setEnlargeImage,url}: {enlargeImage: boolean, setEnlargeImage: (value: boolean) => void ,url:string} ) {

  return (
    <>
      <Dialog open={enlargeImage} onClose={() => setEnlargeImage(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-overlay-blur">
          <DialogPanel className="w-full h-full flex flex-col items-center justify-center" onClick={() => setEnlargeImage(false)}>
            <img
              src= {url}
              alt= "We are the best browsers"
              onClick={() => setEnlargeImage(true)}
              className="rounded-lg cursor-pointer max-w-full h-auto max-h-full w-fit"
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}