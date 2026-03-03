import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (email, password) => {
                set({ isLoading: true, error: null })
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000))
                if (email && password) {
                    set({
                        isAuthenticated: true,
                        user: { email, name: email.split('@')[0], avatar: email[0].toUpperCase() },
                        isLoading: false,
                        error: null,
                    })
                    return { success: true }
                }
                set({ isLoading: false, error: 'Invalid credentials' })
                return { success: false, error: 'Invalid credentials' }
            },

            signup: async (name, email, password) => {
                set({ isLoading: true, error: null })
                await new Promise(resolve => setTimeout(resolve, 1200))
                if (name && email && password) {
                    set({
                        isAuthenticated: true,
                        user: { email, name, avatar: name[0].toUpperCase() },
                        isLoading: false,
                        error: null,
                    })
                    return { success: true }
                }
                set({ isLoading: false, error: 'Please fill all fields' })
                return { success: false, error: 'Please fill all fields' }
            },

            logout: () => {
                set({ user: null, isAuthenticated: false, error: null })
            },

            clearError: () => set({ error: null }),
        }),
        {
            name: 'dopamind-auth',
            partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
        }
    )
)

export default useAuthStore
