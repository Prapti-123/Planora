import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-5 gap-8">
        {/* Contact */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>328 Queensberry Street,</p>
            <p>North Melbourne VIC 3051,</p>
            <p>Australia.</p>
            <p className="pt-2">hi@viatours.com</p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Tours Reviews</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Travel Guides</a></li>
            <li><a href="#" className="hover:text-gray-900">Data Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Legal</a></li>
            <li><a href="#" className="hover:text-gray-900">Sitemap</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Get in Touch</a></li>
            <li><a href="#" className="hover:text-gray-900">Help center</a></li>
            <li><a href="#" className="hover:text-gray-900">Live chat</a></li>
            <li><a href="#" className="hover:text-gray-900">How it works</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2">
          <h3 className="font-bold text-gray-900 mb-4">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to the free newsletter and stay up to date
          </p>
          <div className="flex gap-2 mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 text-sm"
            />
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold text-sm">
              Send
            </button>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Mobile Apps</h4>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800">
                iOS App
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800">
                Android App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-600">© Copyright Viatours 2024</p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  </>

  )
}

export default Footer