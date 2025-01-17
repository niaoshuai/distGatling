import {Component, OnInit} from '@angular/core';
import {PagedResult} from '../../services/worker.metadata';
import {WorkerService} from '../../services/workers.service';
import {Router} from '@angular/router';


@Component({
    selector: 'table-running',
    templateUrl: 'running.component.html',
    providers: [WorkerService]
})

export class RunningComponent implements OnInit {
    public pagedResult: PagedResult;
    public currentPage: number = 1;
    private errorMessage: string;

    constructor(private workerService: WorkerService, private router: Router) {

    }

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): void {
        this.workerService.getRunning(this.currentPage).subscribe(
            data => this.pagedResult = data,
            error => this.errorMessage = <any>error
        );
    }

    navigateToJobDetail(trackingId: string): void {
        this.router.navigate(["/detail/" + trackingId])
    }

    isSuccess(status: string): boolean {
        if (status == "COMPLETED")
            return true;
        return false
    }

    isFailed(status: string): boolean {
        if (status == "FAILED")
            return true;
        return false
    }

    isNormalStatus(status: string): boolean {
        if (status == "FAILED" || (status == "COMPLETED"))
            return false;
        return true
    }

    onNext(): void {
        if (this.currentPage < this.pagedResult.totalPages) {
            this.currentPage++;
            this.fetchData();
        }
    }

    onPrev(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.fetchData();
        }
    }

}
