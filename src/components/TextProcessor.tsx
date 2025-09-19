import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TextProcessor = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 500;

  const handleTextChange = (value: string) => {
    setText(value);
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-card shadow-xl border-0">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Your Text</h2>
              <Select defaultValue="default">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Text Area */}
            <div className="relative">
              <Textarea
                placeholder="Paste your text here..."
                value={text}
                onChange={(e) => handleTextChange(e.target.value)}
                className="min-h-[300px] resize-none border-border/50 focus:border-primary/50 transition-smooth text-base"
              />
              
              {/* Word Counter */}
              <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                {wordCount} / {maxWords} words
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                variant="outline" 
                className="flex-1 border-primary/20 text-primary hover:bg-primary/10 transition-smooth"
                disabled={!text.trim()}
              >
                📊 Check for AI
              </Button>
              <Button 
                className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-medium"
                disabled={!text.trim()}
              >
                ✨ Humanize
              </Button>
            </div>

            {/* Paste Text Button */}
            <div className="mt-4 text-center">
              <Button 
                variant="ghost" 
                className="text-primary hover:bg-primary/10 transition-smooth"
                onClick={() => {
                  navigator.clipboard.readText().then(clipText => {
                    handleTextChange(clipText);
                  }).catch(() => {
                    // Handle clipboard access error silently
                  });
                }}
              >
                📋 Paste Text
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TextProcessor;