import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ResultsTable } from './components/ResultsTable';
import { SearchResult } from './types';
import { mockSearchResults } from './services/mockData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    try {
      if ('webkitSpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'ar-SA';

        recognitionRef.current.onstart = () => {
          setIsListening(true);
        };

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setSearchTerm(transcript);
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current.start();
      } else {
        alert('عذراً، متصفحك لا يدعم خاصية التعرف على الصوت');
      }
    } catch (error) {
      console.error('Speech recognition error:', error);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResults(mockSearchResults);
    } catch (error) {
      console.error('Error fetching results:', error);
      alert('حدث خطأ أثناء البحث');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-6 font-cairo">
      <div className="max-w-6xl mx-auto">
        <Header />
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isListening={isListening}
          onStartListening={startListening}
          onStopListening={stopListening}
          onSearch={handleSearch}
          loading={loading}
        />
        <ResultsTable results={results} />
      </div>
    </div>
  );
}

export default App;