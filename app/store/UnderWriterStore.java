package store;


import models.UnderWriter;

import java.util.List;

public interface UnderWriterStore {
    
    public List<UnderWriter> fetchByName(String name);
    public List<UnderWriter> rejectedBy(String name);
    public UnderWriter getSubmission(String num);
    public List<UnderWriter> submissionsByMonth(String month, String year);
    public List<UnderWriter> submissionsByDay(String day,String month, String year);

}
