import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScALuMAB-xvHMYo66rUBkZPN-Qb5U0KwIKLBzA7g6VTwVqlHg/viewform?embedded=true";

const Register = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full page background overlay */}
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm -z-10" />

      <div className="py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
              Register Now
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us at Vizphoria – fill out the form below to secure your spot
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="ornate-border shadow-elegant mb-8 animate-fade-in-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Info className="w-5 h-5" />
                Registration Instructions
              </CardTitle>
              <CardDescription>Please read before filling the form</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ensure all information provided is accurate and complete.</li>
                <li>• Registration is required for all participants.</li>
                <li>• You can register for multiple events in the same form.</li>
                <li>• Early bird registrations may receive special benefits.</li>
                <li>• Check your email for confirmation and further details.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Registration Form Embed */}
          <Card
            className="ornate-border shadow-elegant animate-fade-in-scale"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-0">
              <div className="w-full h-[900px] rounded-lg overflow-hidden bg-muted/30">
                <iframe
                  src={GOOGLE_FORM_URL}
                  className="w-full h-full"
                  loading="lazy"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Vizphoria Registration Form"
                >
                  Loading form…
                </iframe>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div
            className="mt-8 text-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-muted-foreground">
              Having trouble with registration?{" "}
              <a
                href="/contact"
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
