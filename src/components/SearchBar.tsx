import React from 'react';
import { Mic, MicOff, Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isListening: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
  onSearch: () => void;
  loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  isListening,
  onStartListening,
  onStopListening,
  onSearch,
  loading,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex gap-2 flex-row-reverse">
        <button
          onClick={onSearch}
          disabled={loading}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover flex items-center gap-2 transition-colors disabled:opacity-50"
        >
          <Search className="w-5 h-5" />
          <span>{loading ? 'جاري البحث...' : 'بحث'}</span>
        </button>
        <button
          onClick={isListening ? onStopListening : onStartListening}
          className={`p-3 rounded-lg ${
            isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-200 hover:bg-gray-300'
          }`}
          title={isListening ? 'إيقاف التسجيل' : 'بدء التسجيل الصوتي'}
        >
          {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ادخل استعلام البحث"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right"
        />
      </div>
    </div>
  );
};