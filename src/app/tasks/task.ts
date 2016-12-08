export interface ITask {
	Id: number;
	CsrId: number;
	ProducerId: number;
	StateName: boolean;
	Title: string;
	ClientId: number;
	Description: string;
	ComplianceTags: string;
	TargetLibraryId: number;
	DueDate: string;
	CompletedDateTime: string;
	CreateDateTime: string;
	CompletionNotes: string;
	LastUpdatedBy: string;
	LastUpdatedDateTime: string;
}