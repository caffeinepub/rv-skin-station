# RV Skin Station

## Current State
New project. No existing code or content.

## Requested Changes (Diff)

### Add
- Full multi-section clinic website for RV Skin Station, a dermatology clinic in Adoor, Kerala
- Hero section with headline, subtext, and three CTAs (WhatsApp, Call Now, Book Consultation)
- About the Clinic section with trust signals (4.9 rating, 124+ reviews, experienced team)
- Treatments & Services section with 7 service cards, each with short patient-friendly descriptions
- Why Choose Us section with 5 benefit highlights
- Patient Reviews section with testimonial cards and 4.9 star rating display
- Clinic Photo Gallery section with generated placeholder visuals
- Appointment Booking section with form (Name, Phone, Skin Concern, Preferred Date) and WhatsApp CTA
- Contact & Location section with Google Maps embed, address, phone, clinic hours, and action buttons
- Sticky mobile CTA bar fixed at bottom with WhatsApp, Call Now, Book Appointment buttons
- Appointment form submissions stored in Motoko backend

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Generate clinic imagery (hero, gallery placeholders)
2. Generate Motoko backend with appointment submission storage (name, phone, concern, date, timestamp)
3. Build React frontend with all 9 sections
4. Wire appointment form to backend submitAppointment call
5. WhatsApp CTA links: `https://wa.me/918089360482`
6. Call CTA links: `tel:+918089360482`
7. Google Maps embed for "J J Complex, K.P Road, Adoor, Kerala 691523"
8. Sticky mobile bottom bar visible on small screens only
9. Smooth scroll navigation
10. Mobile-first responsive layout throughout
