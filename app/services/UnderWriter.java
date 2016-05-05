package services;


import java.util.List;

public interface UnderWriter {
    
    public List<models.UnderWriter> fetchByName(String name);
    public List<models.UnderWriter> rejectedBy(String name);
    public models.UnderWriter getSubmission(String num);
}
