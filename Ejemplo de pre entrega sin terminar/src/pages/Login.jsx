import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const { setIsAuth } = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let validationErrors = {}

        if (!email) validationErrors.email = 'Email es requerido'
        if (!password) validationErrors.password = 'La contraseña es requerida'

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
            return // 👉 solo retorna si hay errores
        }

        try {
            const res = await fetch('/data/users.json') // 👈 esta ruta es correcta en desarrollo local
            const users = await res.json()

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            )

            if (!foundUser) {
                setError({ email: 'Credenciales inválidas' })
            } else {
                setIsAuth(true)
                if (foundUser.role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            }
        } catch (err) {
            setError({ email: 'Algo salió mal. Por favor, intenta más tarde' })
        }
    }