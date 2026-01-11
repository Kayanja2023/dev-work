import { Component } from '@angular/core';
import { ChatbotService, ChatMessage } from './chatbot.service';

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
    isOpen = false;
    isLoading = false;
    userInput = '';
    messages: ChatMessage[] = [
        { role: 'assistant', content: 'Hi! I\'m Andile\'s AI assistant. Ask me about his skills, projects, or experience!' }
    ];

    // Suggested prompts for quick interactions
    suggestedPrompts = [
        'What are your top skills?',
        'Tell me about your projects',
        'What\'s your work experience?',
        'How can I contact you?'
    ];

    constructor(private chatbotService: ChatbotService) { }

    toggleChat(): void {
        this.isOpen = !this.isOpen;
    }

    sendPrompt(prompt: string): void {
        this.userInput = prompt;
        this.send();
    }

    async send(): Promise<void> {
        if (!this.userInput.trim() || this.isLoading) return;

        const userMessage = this.userInput.trim();
        this.messages.push({ role: 'user', content: userMessage });
        this.userInput = '';
        this.isLoading = true;

        try {
            const response = await this.chatbotService.chat(userMessage);
            this.messages.push({ role: 'assistant', content: response });
        } catch (error) {
            this.messages.push({ role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' });
        } finally {
            this.isLoading = false;
        }
    }
}
