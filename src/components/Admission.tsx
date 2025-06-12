
import React, { useState } from 'react';
import { Calendar, FileText, Users, Phone, Mail, MapPin, Send } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
  };

  const admissionProcess = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online admission form with required details"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit necessary documents and certificates"
    },
    {
      step: 3,
      title: "Interaction/Assessment",
      description: "Student interaction and academic assessment"
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Fee payment and admission confirmation"
    }
  ];

  const requiredDocuments = [
    "Birth Certificate",
    "Transfer Certificate (if applicable)",
    "Previous Academic Records",
    "Passport Size Photographs",
    "Address Proof",
    "Medical Certificate"
  ];

  return (
    <section id="admission" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our school community and give your child the best education. 
            Our admission process is designed to be simple and transparent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">How to Apply</h3>
            <div className="space-y-6">
              {admissionProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{process.title}</h4>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border">
              <h4 className="font-semibold mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Required Documents
              </h4>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Admission Enquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Class Applying For *</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="1">Class I</option>
                    <option value="2">Class II</option>
                    <option value="3">Class III</option>
                    <option value="4">Class IV</option>
                    <option value="5">Class V</option>
                    <option value="6">Class VI</option>
                    <option value="7">Class VII</option>
                    <option value="8">Class VIII</option>
                    <option value="9">Class IX</option>
                    <option value="10">Class X</option>
                    <option value="11">Class XI</option>
                    <option value="12">Class XII</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Previous School</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Admission Open for Academic Year 2024-25</h3>
          <p className="text-lg mb-6">Limited seats available. Apply now to secure your child's future!</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+91-6454-225041</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>info@gdgoenkapurnea.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
