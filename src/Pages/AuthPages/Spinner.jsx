import React from "react";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function LoadingSpinner() {
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <Button diabled >
        <Spinner className="size-8"  data-icon="inline-start"/>
        Loading...
      </Button>
    </div>
  );
}
