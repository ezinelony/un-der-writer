package services;


import com.google.inject.Inject;
import store.UnderWriterStore;

import java.util.List;

/**
 * *
 */
public class StandardUnderWriter implements UnderWriter {

    /**
     * * 
     */
    private UnderWriterStore store;
    /**
     * * 
     * @param store
     */
    @Inject
    public StandardUnderWriter(UnderWriterStore store) {
        this.store = store;
    }
    
    @Override
    public List<models.UnderWriter> fetchByName(String name) {
        return store.fetchByName(name);
    }

    @Override
    public List<models.UnderWriter> rejectedBy(String name) {
        return store.rejectedBy(name);
    }

    @Override
    public models.UnderWriter getSubmission(String num) {
        return store.getSubmission(num);
    }
}
