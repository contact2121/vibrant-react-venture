import axios from 'axios';
import { toast } from "@/components/ui/use-toast";

const API_URL = 'https://respizenmedical.com/fiori/track_visitor.php';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface VisitorData {
  page_visitors: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data?: {
    ip: string;
    city: string;
    country: string;
    page: string;
    date: string;
  };
}

export const trackVisitor = async (pageName: string, retryCount = 0): Promise<void> => {
  try {
    console.log('Starting visitor tracking for page:', pageName);

    // Simplify the visitor data - only send the page name
    // The server will handle everything else
    const visitorData: VisitorData = {
      page_visitors: pageName
    };

    console.log('Sending visitor data:', visitorData);

    const response = await axios.post<ApiResponse>(API_URL, visitorData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 5000 // 5 seconds timeout
    });

    console.log('Tracking response:', response.data);

    if (response.data.status === 'success') {
      console.log('Visitor tracking successful:', response.data);
      
      // Optional: Show success toast with location info
      if (response.data.data) {
        toast({
          title: "Visit Tracked",
          description: `From ${response.data.data.city}, ${response.data.data.country}`,
        });
      }
    } else {
      throw new Error(response.data.message || 'Unknown error occurred');
    }
  } catch (error) {
    console.error('Error tracking visitor:', error);

    if (retryCount < MAX_RETRIES) {
      console.log(`Retrying... Attempt ${retryCount + 1} of ${MAX_RETRIES}`);
      await delay(RETRY_DELAY * (retryCount + 1)); // Exponential backoff
      return trackVisitor(pageName, retryCount + 1);
    }

    console.error('Failed to track visitor after maximum retries');
    
    // Optional: Show error toast
    toast({
      title: "Error",
      description: "Failed to track visit",
      variant: "destructive",
    });
  }
};
