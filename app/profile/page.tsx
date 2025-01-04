'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    goals: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">
          Your Profile
        </h1>

        <Card className="max-w-2xl mx-auto p-6 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="birthDate">
                Baby's Birth Date
              </label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="goals">
                Recovery Goals
              </label>
              <Textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="What are your main recovery goals?"
                className="w-full min-h-[100px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
            >
              Save Changes
            </Button>
          </form>
        </Card>
      </main>
    </div>
  )
}

