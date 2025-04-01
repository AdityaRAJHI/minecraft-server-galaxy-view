
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { serverCategories, ServerCategory } from '@/data/servers';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  serverName: z.string().min(3, {
    message: 'Server name must be at least 3 characters.',
  }),
  serverAddress: z.string().min(3, {
    message: 'Server address is required.',
  }),
  port: z.string().regex(/^\d+$/, {
    message: 'Port must be a number.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }).max(500, {
    message: 'Description must not exceed 500 characters.',
  }),
  category: z.string({
    required_error: 'Please select a category.',
  }),
  features: z.string().min(5, {
    message: 'Please list some server features.',
  }),
  website: z.string().url({
    message: 'Please enter a valid URL.',
  }).optional().or(z.literal('')),
  discord: z.string().url({
    message: 'Please enter a valid URL.',
  }).optional().or(z.literal('')),
  contactEmail: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  isOwner: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const Submit = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serverName: '',
      serverAddress: '',
      port: '19132',
      description: '',
      category: '',
      features: '',
      website: '',
      discord: '',
      contactEmail: '',
      isOwner: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // In a real application, this would send the data to a backend
    toast.success('Server submitted successfully! We\'ll review it soon.');
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Submit Your Server</h1>
        <p className="text-gray-600 text-center mb-8">
          Want to add your server to our directory? Fill out the form below and we'll review your submission.
        </p>
        
        <div className="minecraft-container">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="serverName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Server Name</FormLabel>
                      <FormControl>
                        <Input placeholder="MyAwesomeServer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="serverAddress"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel>Server Address</FormLabel>
                        <FormControl>
                          <Input placeholder="play.example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="port"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel>Port</FormLabel>
                        <FormControl>
                          <Input placeholder="19132" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your server..." 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Briefly describe what makes your server special.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serverCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="features"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Features</FormLabel>
                      <FormControl>
                        <Input placeholder="Custom plugins, Economy, etc." {...field} />
                      </FormControl>
                      <FormDescription>
                        Comma-separated list of server features
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="discord"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discord Invite (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://discord.gg/example" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      For verification purposes. We won't share this publicly.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="isOwner"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I am the owner/administrator of this server</FormLabel>
                      <FormDescription>
                        Check this box if you are authorized to submit this server.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  className="bg-minecraft-grass hover:bg-minecraft-grass/90 text-white px-8 py-2"
                >
                  Submit Server
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Submit;
