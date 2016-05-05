package controllers;

import com.google.inject.Inject;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.UnderWriter;

import java.util.List;

public class UnderWriterController extends Controller {
    
    private UnderWriter underWriterService;

    /**
     * *
     * @param underWriterService
     *
     * */ 
    @Inject
    public UnderWriterController(UnderWriter underWriterService) {
        this.underWriterService = underWriterService;
    }

    public Result fetchSubmissionsByUnderWriterName(String underWriteName) {
        //sanitize underWriteName

        try{
            List<models.UnderWriter> list = this.underWriterService.fetchByName(underWriteName);

            return ok(Json.toJson(list));
        }catch (Exception e){
            return badRequest(e.getMessage());
        }
    }

    public Result rejectedSubmissions(String underWriteName) {
        //sanitize underWriteName

        try{
            List<models.UnderWriter> list = this.underWriterService.rejectedBy(underWriteName);

            return ok(Json.toJson(list));
        }catch (Exception e){
            return badRequest(e.getMessage());
        }
    }


    public Result getSubmission(String submissionNumber) {
        //sanitize submissionNumber
        try{
            models.UnderWriter underWriter = this.underWriterService.getSubmission(submissionNumber);
            return ok(Json.toJson(underWriter));
        }catch (Exception e){
            return badRequest(e.getMessage());
        }

    }
}
