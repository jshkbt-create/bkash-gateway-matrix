declare module "sonner" {
  export interface ToasterProps {
    theme?: string;
    [key: string]: unknown;
  }
  export const Toaster: React.ComponentType<ToasterProps>;
  export const toast: {
    (message: string, options?: Record<string, unknown>): string | number;
    success: (message: string, options?: Record<string, unknown>) => string | number;
    error: (message: string, options?: Record<string, unknown>) => string | number;
  };
}
