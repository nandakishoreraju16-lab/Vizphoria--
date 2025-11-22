import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
            Register Now
          </h1>
          <p className="text-xl text-muted-foreground">
            Join us at Vizphoria - Fill out the form below to secure your spot
          </p>
        </div>

        {/* Instructions Card */}
        <Card className="ornate-border shadow-elegant mb-8 animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Info className="w-5 h-5" />
              Registration Instructions
            </CardTitle>
            <CardDescription>
              Please read before filling the form
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ensure all information provided is accurate and complete</li>
              <li>• Registration is required for all participants</li>
              <li>• You can register for multiple events in the same form</li>
              <li>• Early bird registrations receive special benefits</li>
              <li>• Check your email for confirmation and further details</li>
            </ul>
          </CardContent>
        </Card>

        {/* Registration Form Embed */}
        <Card className="ornate-border shadow-elegant animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-6">
            <div className="w-full aspect-[4/5] bg-muted/30 rounded-lg flex items-center justify-center">
              {/* Replace this div with actual Google Form embed */}
              <div className="text-center p-8">
                <p className="text-lg font-playfair text-primary mb-4">
                  Google Form Embed Area
                </p>
                <p className="text-muted-foreground mb-6">
                  Please replace the following iframe src with your actual Google Form link
                </p>
                <div className="bg-card p-4 rounded-md text-left">
                  <code className="text-sm text-foreground/70">
                    &lt;iframe src="YOUR_GOOGLE_FORM_URL" width="100%" height="800px"&gt;&lt;/iframe&gt;
                  </code>
                </div>
              </div>
              
              {/* Uncomment and replace with your Google Form URL:
              <iframe 
                src="YOUR_GOOGLE_FORM_URL_HERE"
                width="100%" 
                height="800px"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Loading form...
              </iframe>
              */}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground">
            Having trouble with registration?{" "}
            <a href="/contact" className="text-primary hover:text-secondary transition-colors font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
