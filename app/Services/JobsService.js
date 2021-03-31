import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService {
  createJob(newJob) {
    debugger
    let job = new Job(newJob.company, newJob.title, newJob.rate, newJob.hours, newJob.description, newJob.imgUrl)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
  
  deleteJob(id) {
    // remove the car with that id from the array
    // trigger the update cycle by setting the value of ProxyState.cars

    // NOTE filter itterates over an array and only keeps things where the statement provided is true
    // here we remove the car with the id by only keeping cars that do not have that id
    // then we set the ProxyState array back to the result after the filter
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }

}

export const jobsService = new JobsService();

