import { PollService } from './poll.service';
export declare class PollController {
    private readonly pollService;
    constructor(pollService: PollService);
    createPoll({ question, options }: {
        question: string;
        options: string[];
    }): Promise<import("./poll.entity").Poll>;
    getAllPolls(): Promise<import("./poll.entity").Poll[]>;
}
