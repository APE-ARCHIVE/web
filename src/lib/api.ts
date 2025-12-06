import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create axios instance with default config
export const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://server-apearchive.freeddns.org",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized - clear token and redirect to login
          if (typeof window !== "undefined") {
            localStorage.removeItem("accessToken");
            // window.location.href = '/login';
          }
          break;
        case 403:
          // Handle forbidden
          console.error("Access forbidden");
          break;
        case 500:
          // Handle server error
          console.error("Server error");
          break;
      }
    }

    return Promise.reject(error);
  }
);

// Query key factory for TanStack Query
export const queryKeys = {
  // Add your query keys here as you build APIs
  // Example:
  // documents: {
  //     all: ['documents'] as const,
  //     list: (filters: Record<string, unknown>) => [...queryKeys.documents.all, 'list', filters] as const,
  //     detail: (id: string) => [...queryKeys.documents.all, 'detail', id] as const,
  // },
} as const;
