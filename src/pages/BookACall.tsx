// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import AnimatedSection from "@/components/AnimatedSection";
// import { Calendar, Clock, CheckCircle2, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
// import { toast } from "sonner";

// const timeSlots = [
//   "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
//   "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
//   "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
//   "4:00 PM", "4:30 PM",
// ];

// const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
// const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const BookACall = () => {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [selectedDate, setSelectedDate] = useState<number | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [step, setStep] = useState<1 | 2 | 3>(1);
//   const [submitted, setSubmitted] = useState(false);

//   const daysInMonth = getDaysInMonth(currentYear, currentMonth);
//   const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

//   const isPast = (day: number) => {
//     const date = new Date(currentYear, currentMonth, day);
//     const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
//     return date < todayStart;
//   };

//   const isWeekend = (day: number) => {
//     const date = new Date(currentYear, currentMonth, day);
//     return date.getDay() === 0 || date.getDay() === 6;
//   };

//   const prevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//     setSelectedDate(null);
//   };

//   const nextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//     setSelectedDate(null);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitted(true);
//     toast.success("Your call has been booked! Check your email for confirmation.");
//   };

//   const formattedDate = selectedDate
//     ? `${months[currentMonth]} ${selectedDate}, ${currentYear}`
//     : "";

//   if (submitted) {
//     return (
//       <main className="pt-20">
//         <section className="py-20 lg:py-28">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <AnimatedSection className="max-w-lg mx-auto text-center">
//               <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle2 className="text-primary" size={40} />
//               </div>
//               <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
//                 You're All Set!
//               </h1>
//               <p className="text-muted-foreground text-lg mb-2">
//                 Your discovery call is booked for:
//               </p>
//               <p className="font-display text-xl font-bold text-primary mb-1">{formattedDate}</p>
//               <p className="font-semibold text-foreground mb-8">{selectedTime} (EST)</p>
//               <p className="text-muted-foreground text-sm mb-8">
//                 We've sent a confirmation email with meeting details and a calendar invite. Looking forward to speaking with you!
//               </p>
//               <Button onClick={() => { setSubmitted(false); setStep(1); setSelectedDate(null); setSelectedTime(null); }} variant="outline" className="rounded-full">
//                 Book Another Call
//               </Button>
//             </AnimatedSection>
//           </div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-20">
//       <section className="py-20 lg:py-28">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection className="text-center mb-12">
//             <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-primary/5 text-primary">
//               Book a Call
//             </span>
//             <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground mb-4">
//               Schedule Your Free Discovery Call
//             </h1>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//               Pick a time that works for you and let's discuss how we can grow your brand's social media presence.
//             </p>
//           </AnimatedSection>

//           {/* Step indicator */}
//           <AnimatedSection className="max-w-2xl mx-auto mb-10">
//             <div className="flex items-center justify-center gap-2">
//               {[1, 2, 3].map((s) => (
//                 <div key={s} className="flex items-center gap-2">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
//                     step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
//                   }`}>
//                     {s}
//                   </div>
//                   {s < 3 && <div className={`w-12 sm:w-20 h-0.5 ${step > s ? "bg-primary" : "bg-muted"} transition-all`} />}
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center gap-8 sm:gap-16 mt-2">
//               <span className="text-xs text-muted-foreground">Select Date</span>
//               <span className="text-xs text-muted-foreground">Choose Time</span>
//               <span className="text-xs text-muted-foreground">Your Details</span>
//             </div>
//           </AnimatedSection>

//           <div className="max-w-2xl mx-auto">
//             {/* Step 1: Calendar */}
//             {step === 1 && (
//               <AnimatedSection>
//                 <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50">
//                   <div className="flex items-center justify-between mb-6">
//                     <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
//                       <ChevronLeft size={20} className="text-foreground" />
//                     </button>
//                     <h3 className="font-display text-lg font-bold text-foreground">
//                       {months[currentMonth]} {currentYear}
//                     </h3>
//                     <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
//                       <ChevronRight size={20} className="text-foreground" />
//                     </button>
//                   </div>

//                   <div className="grid grid-cols-7 gap-1 mb-2">
//                     {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
//                       <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-2">{d}</div>
//                     ))}
//                   </div>

//                   <div className="grid grid-cols-7 gap-1">
//                     {Array.from({ length: firstDay }).map((_, i) => (
//                       <div key={`empty-${i}`} />
//                     ))}
//                     {Array.from({ length: daysInMonth }).map((_, i) => {
//                       const day = i + 1;
//                       const disabled = isPast(day) || isWeekend(day);
//                       const selected = selectedDate === day;
//                       return (
//                         <button
//                           key={day}
//                           disabled={disabled}
//                           onClick={() => setSelectedDate(day)}
//                           className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
//                             disabled
//                               ? "text-muted-foreground/30 cursor-not-allowed"
//                               : selected
//                               ? "bg-primary text-primary-foreground shadow-button"
//                               : "text-foreground hover:bg-primary/5"
//                           }`}
//                         >
//                           {day}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <div className="mt-6 flex justify-end">
//                     <Button
//                       disabled={!selectedDate}
//                       onClick={() => setStep(2)}
//                       size="lg"
//                       className="rounded-full px-8"
//                     >
//                       Choose Time
//                       <ArrowRight size={16} />
//                     </Button>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             )}

//             {/* Step 2: Time Slots */}
//             {step === 2 && (
//               <AnimatedSection>
//                 <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Calendar className="text-primary" size={18} />
//                     <p className="text-sm font-medium text-foreground">{formattedDate}</p>
//                   </div>
//                   <h3 className="font-display text-xl font-bold text-foreground mb-6">Select a Time (EST)</h3>

//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {timeSlots.map((time) => (
//                       <button
//                         key={time}
//                         onClick={() => setSelectedTime(time)}
//                         className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
//                           selectedTime === time
//                             ? "bg-primary text-primary-foreground border-primary shadow-button"
//                             : "border-border text-foreground hover:border-primary/30 hover:bg-primary/5"
//                         }`}
//                       >
//                         <Clock size={14} />
//                         {time}
//                       </button>
//                     ))}
//                   </div>

//                   <div className="mt-6 flex justify-between">
//                     <Button variant="ghost" onClick={() => setStep(1)} className="rounded-full">
//                       <ArrowLeft size={16} />
//                       Back
//                     </Button>
//                     <Button
//                       disabled={!selectedTime}
//                       onClick={() => setStep(3)}
//                       size="lg"
//                       className="rounded-full px-8"
//                     >
//                       Continue
//                       <ArrowRight size={16} />
//                     </Button>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             )}

//             {/* Step 3: Form */}
//             {step === 3 && (
//               <AnimatedSection>
//                 <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card border border-border/50">
//                   <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
//                     <div className="flex items-center gap-2 text-sm">
//                       <Calendar className="text-primary" size={16} />
//                       <span className="font-medium text-foreground">{formattedDate}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm">
//                       <Clock className="text-primary" size={16} />
//                       <span className="font-medium text-foreground">{selectedTime} EST</span>
//                     </div>
//                   </div>

//                   <h3 className="font-display text-xl font-bold text-foreground mb-6">Your Details</h3>

//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="grid sm:grid-cols-2 gap-5">
//                       <div>
//                         <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
//                         <Input required placeholder="John Doe" className="rounded-lg h-12" />
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
//                         <Input required type="email" placeholder="john@example.com" className="rounded-lg h-12" />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium text-foreground mb-1.5 block">Business Type *</label>
//                       <Input required placeholder="e.g., E-commerce, Coaching, SaaS" className="rounded-lg h-12" />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium text-foreground mb-1.5 block">What are your goals? *</label>
//                       <Textarea required placeholder="Tell us about your brand and what you'd like to achieve with social media..." className="rounded-lg min-h-[100px] resize-none" />
//                     </div>
//                     <div className="flex justify-between pt-2">
//                       <Button variant="ghost" onClick={() => setStep(2)} className="rounded-full">
//                         <ArrowLeft size={16} />
//                         Back
//                       </Button>
//                       <Button type="submit" size="lg" className="rounded-full px-8">
//                         Confirm Booking
//                         <CheckCircle2 size={16} />
//                       </Button>
//                     </div>
//                   </form>
//                 </div>
//               </AnimatedSection>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BookACall;
