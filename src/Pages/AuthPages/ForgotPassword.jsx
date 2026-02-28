import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/ComponentProject/AuthContext/Context";
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema } from "@/ComponentProject/schemas/authschema";
import { zodResolver } from "@hookform/resolvers/zod";

function ForgotPassword() {
  const { handleForgotPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ForgotPasswordSchema) });


  const handleFormSubmit = async (data) => {
    const toastId = toast.loading("Verifiying email");
    try {
      await handleForgotPassword(data);
      toast.success("Check your email!", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Something went wrong!", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <Card className=" min-w-[400px]">
          <CardHeader className="pb-[18px]">
            <CardTitle className="text-center my-1 text-lg">
              Reset your password
            </CardTitle>
            <CardDescription className="text-center w-72 mx-auto">
              Enter your user account's verified email address and we will send
              you a password reset link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form  id="forgot-form" onSubmit={handleSubmit(handleFormSubmit)}>
              <Label className="">Email</Label>
              <Input
                required
                type="email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm mt-1 text-red-500 ">
                  {errors.email.message}
                </p>
              )}
            </form>
          </CardContent>
          <CardFooter className=" rounded-b-lg flex justify-center py-4 pb-7 " >
            <Button type="submit" form="forgot-form" className="w-full">Send password reset email</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ForgotPassword;
