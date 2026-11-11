// src/components/sections/CertificationsSection.tsx

import React, { useState } from 'react';
import { certifications } from '../../data/portfolioData';
import { Award, FileText, X } from 'lucide-react';
import type { Certification } from '../../types/portfolio';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            Credentials & Training
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 text-base">
            Certifications I have aquired.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-emerald-700 mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Image Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full p-6 relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{selectedCert.title}</h3>
                <p className="text-xs text-gray-500">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto flex items-center justify-center bg-gray-50 rounded-xl p-2 border border-gray-100">
              {selectedCert.imageUrl && selectedCert.imageUrl !== "/" ? (
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="max-w-full h-auto rounded-lg object-contain"
                />
              ) : (
                <div className="py-16 text-center space-y-2">
                  <Award className="w-12 h-12 text-emerald-600 mx-auto" />
                  <p className="text-sm font-semibold text-gray-700">Certificate Document Preview</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};