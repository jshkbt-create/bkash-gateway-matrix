"use client"

import * as React from "react"
import {
  useController,
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  FieldPath,
  UseFormStateReturn,
} from "react-hook-form"
import { cn } from "@/lib/utils"

export const Form = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      {...props}
      className={cn("space-y-8", props.className)}
    >
      {children}
    </form>
  )
}

export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-2", className)}
    {...props}
  />
))
FormItem.displayName = "FormItem"

export const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
FormLabel.displayName = "FormLabel"

export const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-h-[auto]", className)}
    {...props}
  />
))
FormControl.displayName = "FormControl"

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm font-medium text-destructive",
      className
    )}
    {...props}
  />
))
FormMessage.displayName = "FormMessage"

export const FormField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  render,
}: {
  control: Control<TFieldValues>
  name: TName
  render: (props: {
    field: ControllerRenderProps<TFieldValues, TName>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<TFieldValues>
  }) => React.ReactNode
}) => {
  const { field, fieldState } = useController({
    name,
    control,
  })

  return render({
    field,
    fieldState,
    formState: {} as UseFormStateReturn<TFieldValues>
  })
}
