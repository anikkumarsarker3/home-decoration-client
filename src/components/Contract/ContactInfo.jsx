import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

                <div className="p-6 bg-white rounded-xl shadow">
                    <Phone className="mx-auto text-purple-600" size={40} />
                    <h3 className="text-xl font-bold mt-3 mb-2">Phone</h3>
                    <p className="text-gray-600">+880 123 456 789</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow">
                    <Mail className="mx-auto text-purple-600" size={40} />
                    <h3 className="text-xl font-bold mt-3 mb-2">Email</h3>
                    <p className="text-gray-600">support@styledecor.com</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow">
                    <MapPin className="mx-auto text-purple-600" size={40} />
                    <h3 className="text-xl font-bold mt-3 mb-2">Address</h3>
                    <p className="text-gray-600">Gulshan, Dhaka, Bangladesh</p>
                </div>

            </div>
        </section>
    );
}
