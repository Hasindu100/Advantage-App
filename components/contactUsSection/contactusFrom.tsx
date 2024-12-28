import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("frDtBGCCD-GOcxv7E");

interface FormData {
    email: string;
    name: string;
    company: string;
    title: string;
    useCase: string;
    team: string;
    requirements: string;
}

interface FormErrors {
    email?: string;
    name?: string;
    company?: string;
    title?: string;
    useCase?: string;
    team?: string;
    requirements?: string;
    submit?: string;
}

const ContactUsForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        name: '',
        company: '',
        title: '',
        useCase: '',
        team: '',
        requirements: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!validateEmail(value)) return 'Please enter a valid email address';
                break;
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                if (value.trim().length > 50) return 'Name must be less than 50 characters';
                break;
            case 'company':
                if (value.trim().length > 100) return 'Company name must be less than 100 characters';
                break;
            case 'title':
                if (value.trim().length > 100) return 'Title must be less than 100 characters';
                break;
            case 'useCase':
                if (value.trim().length > 1000) return 'Use case description must be less than 1000 characters';
                break;
            case 'team':
                if (value.trim().length > 500) return 'Team description must be less than 500 characters';
                break;
            case 'requirements':
                if (!value.trim()) return 'Requirements are required';
                if (value.trim().length < 10) return 'Please provide more details about your requirements (minimum 10 characters)';
                if (value.trim().length > 1000) return 'Requirements must be less than 1000 characters';
                break;
        }
    };

    const validateAllFields = (): FormErrors => {
        const newErrors: FormErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof FormData]);
            if (error) {
                newErrors[key as keyof FormErrors] = error;
            }
        });
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
        }

        if (touched[id]) {
            const error = validateField(id, value);
            setErrors(prev => ({
                ...prev,
                [id]: error
            }));
        }
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));

        const error = validateField(field, formData[field as keyof FormData]);
        setErrors(prev => ({
            ...prev,
            [field]: error
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const allTouched = Object.keys(formData).reduce((acc, key) => ({
            ...acc,
            [key]: true
        }), {});
        setTouched(allTouched);

        const newErrors = validateAllFields();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const emailResult = await emailjs.send(
                    'service_m4qpw4q',
                    'template_e8f32ue',
                    {
                        to_email: 'cpriyadasun@gmail.com',
                        from_name: formData.name,
                        from_email: formData.email,
                        company: formData.company || 'Not provided',
                        title: formData.title || 'Not provided',
                        use_case: formData.useCase || 'Not provided',
                        team: formData.team || 'Not provided',
                        requirements: formData.requirements,
                        submission_date: new Date().toLocaleString()
                    }
                );

                if (emailResult.status === 200) {
                    setSubmitStatus('success');
                    setFormData({
                        email: '',
                        name: '',
                        company: '',
                        title: '',
                        useCase: '',
                        team: '',
                        requirements: ''
                    });
                    setTouched({});
                    setErrors({});
                }
            } catch (error) {
                console.error('Submission error:', error);
                setSubmitStatus('error');
                setErrors(prev => ({
                    ...prev,
                    submit: 'Failed to submit form. Please try again.'
                }));
            }
        }
        setIsSubmitting(false);
    };

    const getInputClassName = (fieldName: string) => {
        const baseClasses = "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500";
        const errorClasses = touched[fieldName] && errors[fieldName as keyof FormErrors]
            ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500";
        return `${baseClasses} ${errorClasses}`;
    };

    return (
        <div className="w-full max-w-7xl mx-auto bg-white p-4 md:p-10 rounded shadow">
            <h2 className="text-xl md:text-2xl font-bold mb-4 sm: ">Contact Us</h2>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Thank you for your submission! We&apos;ll get back to you soon.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    There was an error submitting the form. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" noValidate>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-700 font-medium">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        className={getInputClassName('email')}
                        placeholder="your@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        required
                    />
                    {touched.email && errors.email && (
                        <div id="email-error" className="text-sm text-red-600 font-medium">
                            {errors.email}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="name" className="block text-gray-700 font-medium">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        className={getInputClassName('name')}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        required
                    />
                    {touched.name && errors.name && (
                        <div id="name-error" className="text-sm text-red-600 font-medium">
                            {errors.name}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="block text-gray-700 font-medium">
                        Company/Organization
                    </label>
                    <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={() => handleBlur('company')}
                        className={getInputClassName('company')}
                        placeholder="Your company name"
                    />
                    {touched.company && errors.company && (
                        <div className="text-sm text-red-600 font-medium">
                            {errors.company}
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="title" className="block text-gray-700 font-medium">
                        Title/Designation
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        onBlur={() => handleBlur('title')}
                        className={getInputClassName('title')}
                        placeholder="Your job title"
                    />
                    {touched.title && errors.title && (
                        <div className="text-sm text-red-600 font-medium">
                            {errors.title}
                        </div>
                    )}
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="useCase" className="block text-gray-700 font-medium">
                        Blockchain Use Case
                    </label>
                    <textarea
                        id="useCase"
                        rows={4}
                        value={formData.useCase}
                        onChange={handleChange}
                        onBlur={() => handleBlur('useCase')}
                        className={getInputClassName('useCase')}
                        placeholder="Describe your blockchain use case..."
                    />
                    {touched.useCase && errors.useCase && (
                        <div className="text-sm text-red-600 font-medium">
                            {errors.useCase}
                        </div>
                    )}
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="team" className="block text-gray-700 font-medium">
                        Team Information
                    </label>
                    <textarea
                        id="team"
                        rows={4}
                        value={formData.team}
                        onChange={handleChange}
                        onBlur={() => handleBlur('team')}
                        className={getInputClassName('team')}
                        placeholder="Tell us about your team..."
                    />
                    {touched.team && errors.team && (
                        <div className="text-sm text-red-600 font-medium">
                            {errors.team}
                        </div>
                    )}
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="requirements" className="block text-gray-700 font-medium">
                        Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="requirements"
                        rows={4}
                        value={formData.requirements}
                        onChange={handleChange}
                        onBlur={() => handleBlur('requirements')}
                        className={getInputClassName('requirements')}
                        placeholder="What are you looking for?"
                        aria-invalid={!!errors.requirements}
                        aria-describedby={errors.requirements ? 'requirements-error' : undefined}
                        required
                    />
                    {touched.requirements && errors.requirements && (
                        <div id="requirements-error" className="text-sm text-red-600 font-medium">
                            {errors.requirements}
                        </div>
                    )}
                </div>

                <div className="md:col-span-2 flex flex-col items-center gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto px-6 md:px-10 py-3 rounded transition duration-300 ${isSubmitting
                                ? 'bg-blue-300 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600'
                            } text-white font-medium`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {errors.submit && (
                        <div className="text-sm text-red-600 font-medium">
                            {errors.submit}
                        </div>
                    )}
                    <p className="text-sm text-gray-600">
                        <span className="text-red-500">*</span> Required fields
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ContactUsForm;