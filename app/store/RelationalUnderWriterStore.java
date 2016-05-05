package store;

import models.UnderWriter;
import com.avaje.ebean.*;
import java.util.List;


public class RelationalUnderWriterStore implements UnderWriterStore {
    @Override
    public List<UnderWriter> fetchByName(String name) {

        List<UnderWriter> list = Ebean.find(UnderWriter.class)
                .where()
                .ieq("UNDERWRITER_NAME", name)
                .findList();

        return list;
    }

    @Override
    public List<UnderWriter> rejectedBy(String name) {
        List<UnderWriter> list = Ebean.find(UnderWriter.class)
                .where()
                .ieq("UNDERWRITER_NAME", name)
                .isNotNull("REJECTED_DATE")
                .ne("REJECTED_DATE", "")
                .findList();

        return list;
    }

    @Override
    public UnderWriter getSubmission(String num) {
        return Ebean.find(UnderWriter.class)
                .where()
                .ieq("SUBMISSION_NO", num)
                .findUnique();

    }

    @Override
    public List<UnderWriter> submissionsByMonth(String month, String year) {
        List<UnderWriter> list = Ebean.find(UnderWriter.class)
                .where()
                .ieq("RECEIVED_YEAR", year)
                .ieq("RECEIVED_MONTH", month)
                .findList();

        return list;
    }

    @Override
    public List<UnderWriter> submissionsByDay(String day, String month, String year) {
        List<UnderWriter> list = Ebean.find(UnderWriter.class)
                .where()
                .ieq("RECEIVED_YEAR", year)
                .ieq("RECEIVED_MONTH", month)
                .ieq("RECEIVED_DAY", day)
                .findList();

        return list;
    }
}
