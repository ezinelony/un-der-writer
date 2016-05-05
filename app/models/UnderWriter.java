package models;

import com.avaje.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="submissionanalytics")
public class UnderWriter extends Model{
    
    @Column(name="AGENT_NAME")
    private String agentName;

    @Column(name="UNDERWRITER_NAME")
    private String underWriterName;

    @Column(name="AGENT_CODE")
    private String agentCode;

    @Column(name="QUOTED_COUNT")
    private String quotedCount;
    
    @Column(name="INSURED_STATE")
    private String insuredState;
    
    @Column(name="SUBMISSION_NO")
    private String submissionNumber;

    @Column(name="RECEIVED_DATE")
    private String receivedDate;

    @Column(name="RECEIVED_MONTH")
    private String receivedMonth;

    @Column(name="RECEIVED_YEAR")
    private String receivedYear;

    @Column(name="QUOTED_DATE")
    private String quotedDate;

    @Column(name="QUOTED_MONTH")
    private String quotedMonth;

    @Column(name="QUOTED_YEAR")
    private String quotedYear;


    @Column(name="REJECTED_DATE")
    private String rejectedDate;

    @Column(name="REJECT_REASON")
    private String rejectedReason;

    @Column(name="POL_NUM")
    private String policyNumber;

    
    public String getAgentName() {
        return agentName;
    }

    public void setAgentName(String agentName) {
        this.agentName = agentName;
    }

    public String getUnderWriterName() {
        return underWriterName;
    }

    public void setUnderWriterName(String underWriterName) {
        this.underWriterName = underWriterName;
    }

    public String getAgentCode() {
        return agentCode;
    }

    public void setAgentCode(String agentCode) {
        this.agentCode = agentCode;
    }

    public String getQuotedCount() {
        return quotedCount;
    }

    public void setQuotedCount(String quotedCount) {
        this.quotedCount = quotedCount;
    }

    public String getInsuredState() {
        return insuredState;
    }

    public void setInsuredDate(String insuredState) {
        this.insuredState = insuredState;
    }

    public String getSubmissionNumber() {
        return submissionNumber;
    }

    public void setSubmissionNumber(String submissionNumber) {
        this.submissionNumber = submissionNumber;
    }

    public String getReceivedDate() {
        return receivedDate;
    }

    public void setReceivedDate(String receivedDate) {
        this.receivedDate = receivedDate;
    }

    public String getReceivedMonth() {
        return receivedMonth;
    }

    public void setReceivedMonth(String receivedMonth) {
        this.receivedMonth = receivedMonth;
    }

    public String getReceivedYear() {
        return receivedYear;
    }

    public void setReceivedYear(String receivedYear) {
        this.receivedYear = receivedYear;
    }

    public String getQuotedDate() {
        return quotedDate;
    }

    public void setQuotedDate(String quotedDate) {
        this.quotedDate = quotedDate;
    }

    public String getQuotedMonth() {
        return quotedMonth;
    }

    public void setQuotedMonth(String quotedMonth) {
        this.quotedMonth = quotedMonth;
    }

    public String getQuotedYear() {
        return quotedYear;
    }

    public void setQuotedYear(String quotedYear) {
        this.quotedYear = quotedYear;
    }

    public void setInsuredState(String insuredState) {
        this.insuredState = insuredState;
    }

    public String getRejectedDate() {
        return rejectedDate;
    }

    public void setRejectedDate(String rejectedDate) {
        this.rejectedDate = rejectedDate;
    }

    public String getRejectedReason() {
        return rejectedReason;
    }

    public void setRejectedReason(String rejectedReason) {
        this.rejectedReason = rejectedReason;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }
}
